import React from 'react';
import PostCode from 'react-daum-postcode';

export default function PostCodeComponent ()  {

    const onCompletePost =()=>{
        
    }
    return (
        <div id='postCode'>
            <PostCode
            autoClose
            onComplete={this.onCompletePost}
            />
        </div>
    );
};

