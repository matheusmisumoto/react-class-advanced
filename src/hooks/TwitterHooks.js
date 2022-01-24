import React, {useEffect, memo, useState} from 'react'

// shouldComponentUpdate
const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading;
}

function TwitterHooks(props) {

    const {loading} = props;
    const [tweet, setTweet] = useState(); // title is the initial value

    // componentDidMount
    useEffect(() => {
        const { posts, loading } = props
        console.log('componentDidMount', posts)
        console.log('componentDidMount:loading', loading)
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate', loading)
    }, [loading]);

    // componentWillUnmount
    useEffect(() => {
        return() => {
            console.log('componentWillUnmount: deleted :(')
        }
    }, []);

    const refreshTweet = () => {
        setTweet('Tweet refreshed')
    }

    console.log('Tweet refreshed: ', tweet)

    return (
        <div>
            <button onClick={refreshTweet}>Re-render</button>
            tests
        </div>
    )
}

export default memo(TwitterHooks, areEqual)