// next에서 부모 컴포넌트가 된다 _app.js root를 담당
import React from 'react';
import Head from "next/dist/next-server/lib/head";
import PropTypes from 'prop-types';
import AppLayout from "../components/AppLayout";

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    )

};

// props를 정확히 정의해줌. 적용을 안해도 되지만 하면 오류를 잡아준다(?)
NodeBird.propTypes = {
    Component: PropTypes.elementType,
};

export default NodeBird;