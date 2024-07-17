import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { ReactComponent as Flogo } from '../../assets/flogo.svg'
import { ReactComponent as Mlogo } from '../../assets/mlogo.svg'

const SignIn = ({ history }) => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-[93vh] form-control">
                <ul className="steps pb-[50px]">
                    <li className="step step-primary">Nome</li>
                    <li className="step">Sexo</li>
                    <li className="step">Nascimento</li>
                    <li className="step">Doenças Crônicas</li>
                </ul>
                <div className="label">
                    <span className="label-text">Primeiro Nome</span>
                </div>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-info w-full max-w-xs"
                />
                <div className="label">
                    <span className="label-text">Sobrenomes</span>
                </div>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-info w-full max-w-xs"
                />
                <br />
                <button
                    className="btn btn-info w-[150px]"
                    onClick={() => history.push('/sexo')}
                >
                    Seguir
                </button>
            </div>
        </div>
    )
}

export default withRouter(SignIn)
