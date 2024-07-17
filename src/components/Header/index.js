import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = '#',
}) {
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <img alt="Logo" className="size-32" src={Logo} />
            </div>
            <h2 className="mt-6 text-center text-4xl font-extrabold text-neutral">
                {heading}
            </h2>
            <p className="text-center text-base text-secondary mt-5">
                {paragraph}{' '}
                <Link to={linkUrl} className="font-medium link link-accent">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}
