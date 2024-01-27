import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loading = ({ isLoading }) => {
    return (
        <div className="loading-container">
            {isLoading && (
                <div className="loading">
                    <HashLoader
                        loading={isLoading}
                        type={'Puff'}
                        color={'#00BFFF'}
                        height={100}
                        width={100}
                        style={{alignContent: "center"}}
                    />
                </div>
            )}
        </div>
    );
};

export default Loading;
