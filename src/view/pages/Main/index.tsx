// Core
import React, { FC, useState } from 'react';

// Apollo
import { useCatsQuery, useCreateCatMutation } from '../../../bus/Cats';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    const { data, loading } = useCatsQuery();
    const [ createCat ] = useCreateCatMutation();
    const [ form, setForm ] = useState({
        name: '',
        age:  '',
    });

    const onChangeFormHandler = (event:any) => void setForm({
        ...form,
        [ event.target.name ]: event.target.value,
    });

    const onSubmitHandler = () => {
        createCat({
            variables: {
                input: {
                    name: form.name,
                    age:  parseInt(form.age, 10),
                },
            },
        });
    };

    return (
        <Container>
            { loading && <p>Data loading in progress</p> }
            {
                data?.cats.map(({ _id, name, age })=>{
                    return (
                        <section key = { _id }>
                            <p>Кликуха: {name}</p>
                            <p>Срок: {age}</p>
                        </section>
                    );
                })
            }
            <div>
                <input
                    name = 'name'
                    value = { form.name }
                    onChange = { onChangeFormHandler }
                />
                <input
                    name = 'age'
                    type = 'number'
                    value = { form.age }
                    onChange = { onChangeFormHandler }
                />
                <button onClick = { onSubmitHandler }>Submit</button>
            </div>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
