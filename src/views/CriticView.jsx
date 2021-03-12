import React from 'react';
import {useEffect} from 'react';
import {useParams} from "react-router";
import {getPublicUser} from "../services/user.service";

export const CriticView = (props) => {
    const {user, setUser} = props;
    const {id} = useParams();

    useEffect(() => {
        getPublicUser(id)
            .then(response => {
                setUser(response.data);
            });
    }, []);

    return (
        <div>
            <div className="loginbgcolor">
                <h1>Critic</h1>
            </div>
            <div>
                {/*user.email is just a temp thing will remove at the end */}
                <p>ID: {user.id}</p>
                <p>Name: {user.displayName}</p>
            </div>
        </div>
    );
};