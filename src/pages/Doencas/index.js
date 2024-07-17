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
                    <li className="step step-primary">Sexo</li>
                    <li className="step step-primary">Nascimento</li>
                    <li className="step step-primary">Doenças Crônicas</li>
                </ul>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text text-xl pr-3">Asma</span>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-secondary"
                        />
                    </label>

                    <label className="cursor-pointer label">
                        <span className="label-text text-xl pr-3">
                            Fibrose cística
                        </span>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-secondary"
                        />
                    </label>

                    <label className="cursor-pointer label">
                        <span className="label-text text-xl pr-3">
                            Epilepsia
                        </span>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-secondary"
                        />
                    </label>

                    <label className="cursor-pointer label">
                        <span className="label-text text-xl pr-3">
                            Diabetes tipo 1
                        </span>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-secondary"
                        />
                    </label>

                    <label className="cursor-pointer label">
                        <span className="label-text text-xl pr-3">
                            Hemoglobinopatia
                        </span>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-secondary"
                        />
                    </label>
                    <h3 className="text-center underline">Mais opções</h3>
                </div>
                <br />
                <br />
                <button
                    className="btn btn-info w-[150px]"
                    onClick={() => history.push('/')}
                >
                    Seguir
                </button>
            </div>
        </div>
    )
}

export default withRouter(SignIn)
