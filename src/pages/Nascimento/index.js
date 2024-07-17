import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { ReactComponent as Flogo } from '../../assets/flogo.svg'
import { ReactComponent as Mlogo } from '../../assets/mlogo.svg'

const Nascimento = ({ history }) => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-[93vh] form-control">
                <ul className="steps pb-[50px]">
                    <li className="step step-primary">Nome</li>
                    <li className="step step-primary">Sexo</li>
                    <li className="step step-primary">Nascimento</li>
                    <li className="step">Doenças Crônicas</li>
                </ul>
                <div className="label">
                    <span className="label-text">Nascimento</span>
                </div>
                <input
                    type="date"
                    max="2024-07-20"
                    placeholder="Type here"
                    className="input input-bordered input-info w-[300px] max-w-xs"
                />
                <br />
                <div className="label">
                    <span className="label-text">Peso no nascimento</span>
                </div>
                <label className="input input-bordered flex items-center gap w-[300px]">
                    <input
                        type="number"
                        step="0.1"
                        className="w-full"
                        placeholder="Peso no nascimento"
                    />
                    g
                </label>
                <br />
                <div className="label">
                    <span className="label-text">Comprimento</span>
                </div>
                <label className="input input-bordered flex items-center gap-2 w-[300px]">
                    <input
                        type="number"
                        step="0.1"
                        className="w-full"
                        placeholder="Comprimento no nascimento"
                    />
                    cm
                </label>
                <br />
                <button
                    className="btn btn-info w-[150px]"
                    onClick={() => history.push('/doencas')}
                >
                    Seguir
                </button>
            </div>
        </div>
    )
}

export default withRouter(Nascimento)
