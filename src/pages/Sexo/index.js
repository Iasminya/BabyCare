import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { ReactComponent as Flogo } from '../../assets/flogo.svg'
import { ReactComponent as Mlogo } from '../../assets/mlogo.svg'

const SignIn = ({ history }) => {
    return (
        <div className="flex items-center justify-center min-h-[100vh]">
            <div className="flex flex-col w-full border-opacity-50">
                <ul className="steps pb-[50px]">
                    <li className="step step-primary">Nome</li>
                    <li className="step step-primary">Sexo</li>
                    <li className="step">Nascimento</li>
                    <li className="step">Doenças Crônicas</li>
                </ul>
                <div className="w-full flex flex-col px-5 justify-center">
                    <button
                        className="h-20"
                        onClick={() => history.push('/birth-info')}
                    >
                        <div className="card bg-base-200 rounded-box grid h-20 place-items-center">
                            <Mlogo className="size-16" />
                        </div>
                    </button>
                    <div className="divider">OU</div>
                    <button
                        className="h-20"
                        onClick={() => history.push('/birth-info')}
                    >
                        <div className="card bg-base-200 rounded-box grid h-20 place-items-center">
                            <Flogo className="size-16" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SignIn)
