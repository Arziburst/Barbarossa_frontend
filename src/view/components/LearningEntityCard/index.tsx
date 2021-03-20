// Core
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// Components
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

// Types
import { getPath_TESTS } from '../../routes/paths';
import { Lessons_lessons_tests } from '../../../bus/Lessons';

const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '15px',
    },
}));

type LearningEntityData = {
    __typename: 'Lesson' | 'Test';
    _id: string;
    lessonNumber?: number;
    title: string | null;
    description: string | null;
    testNumber?: number;
    tests?: Lessons_lessons_tests[];
}

type PropsTypes = {
    entityData: LearningEntityData,
    className?: string,
}


export const LearningEntityCard: FC<PropsTypes> = ({ className, entityData  }) => {
    const classes = useStyles();

    const lessonNumberJSX = entityData?.lessonNumber && (
        <>
            Lesson {entityData.lessonNumber}
        </>
    );

    const testNumberJSX = entityData?.testNumber && (
        <>
            Test {entityData.testNumber}
        </>
    );

    return (
        <Card
            className = { `${classes.root} ${className}}` }>
            <CardHeader
                subheader = { (
                    <div>
                        { lessonNumberJSX ?? testNumberJSX ?? null }
                        {
                            Array.isArray(entityData?.tests) && (
                                <Typography
                                    color = 'textSecondary'
                                    component = 'p'
                                    variant = 'body2'>
                                    {entityData?.tests.length} tests
                                </Typography>
                            )
                        }
                    </div>
                ) }
                title = { entityData.title }
            />
            <CardContent>
                {
                    entityData?.description && (
                        <Typography
                            className = 'mb-3'
                            color = 'textSecondary'
                            component = 'p'
                            variant = 'body1'>
                            {entityData?.description}
                        </Typography>
                    )
                }
                <Typography color = 'primary'>
                    <Link
                        style = {{ textDecoration: 'none' }}
                        to = { getPath_TESTS(entityData._id) }>
                        Take the tests
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    );
};
