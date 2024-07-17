import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { ReactComponent as Flogo } from '../../assets/flogo.svg'
import { ReactComponent as Mlogo } from '../../assets/mlogo.svg'
import Logo from '../../assets/logo.svg'

const SignIn = ({ history }) => {
    return (
        <div className="flex items-center min-h-[93vh] form-control">
            <div className="card card-side bg-base-100 shadow-xl max-w-[90%]">
                <div className="flex items-center pl-3">
                    <img alt="Logo" className="size-32" src={Logo} />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Rodrigo Said</h2>
                    <p className="font-semibold">
                        Próximo evento: Vacina Hepatite B (5 dias)
                    </p>
                    <div className="card-actions justify-center">
                        <div
                            className="radial-progress"
                            style={{ '--value': 5 }}
                            role="progressbar"
                        >
                            15 dias
                        </div>
                    </div>
                </div>
                <div className="card-actions relative">
                    <button className="btn btn-info absolute bottom-[20px] right-[20px]">
                        Novo Bebê
                    </button>
                </div>
            </div>
            <br />
            <button
                className="btn btn-primary w-[300px] text-xl"
                onClick={() => history.push('./calendar')}
            >
                Calendário
            </button>
            <br />
            <button className="btn btn-secondary w-[300px] text-xl">
                Alimentação
            </button>
            <br />
            <button className="btn btn-accent w-[300px] text-xl">
                Sono
            </button>{' '}
            <br />
            <button className="btn btn-neutral w-[300px] text-xl">
                Fralda
            </button>
        </div>
    )
}

export default withRouter(SignIn)
