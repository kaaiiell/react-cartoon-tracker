import React from 'react';
import App from "./App";
import ApolloClient from 'apollo-client';
import {InMemoryCache} from '@apollo/client';
import {createHttpLink} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {setContext} from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: "https://immense-basin-96787.herokuapp.com/",
});

const authLink = setContext(()=>{
    const token = localStorage.getItem("jwtToken");
    return{
        headers: {
            Authorization: token ? `Bearer ${token}`: ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client ={client}>
              <Router>
            <App auth={authLink.headers}/>
            </Router>
    </ApolloProvider>
)
