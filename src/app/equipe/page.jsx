import { membros } from "@/app/const/index";
import Image from "next/image";

export default function Equipe() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-8 min-h-[75vh]">
            {membros.map((membro, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg transition-shadow delay-300 hover:shadow-none p-10 w-80">

                    <img
                        src={membro.imagem}
                        alt={`Foto de ${membro.nome}`}
                        className="w-24 h-24 rounded-full mb-5"
                    />

                    <h2 className="text-xl font-semibold text-black">{membro.nome}</h2>
                    <p className="text-gray-600">{membro.funcao}</p>

                    <div className="mt-4 flex flex-row gap-2">
                        <a href={membro.linkedin} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAclBMVEUAd7f///8Ac7UAa7H3/P3N4e5lnMq3zuMAcLQAdba61eeevtuJtte80uUoisIAbrORvdvi7vbE2OlzrNI/lMYehL7o8/moy+ITe7kAaLCz0eU/jcLZ6PPv9fpPl8eaw95bnss8hL5Mi8FflMVnptCArtJfQR9tAAAEmElEQVR4nO2ce1frIAzAgbVXMuv6fqzt2undvv9XvK3OPTqCzHobPId41D8G3W8QkkBYGD9JnKRZzsgkz9Ik/mRhH/+KKA8l0DExBjLMo+IaqqxCUqITV1iVF6iACWqgDxEs+IQKVtQwF1kFH1BlRU1yLeMMMl5Ulszdh4iqGKCikJrjVsKIszi3YN1dC+QxSywbqGGoEpZKaoipyJRlls3eMH8ZI/R3mFiIZCS2TS+AEONfsMe8wko2adDXZZT+hZUdXLKK/N0p6vL8srHAdIht0PJrKXpJjSXyhE+lyGip5Ka9Y+J8t6ekkl2sYBpUK6VTd2C+kmmYwZyMCnqEiXO/IrKl0OxQKE4VVGzvF97VBNLsxaDSMHHekQyVDLRQLySRKqy1UC1JtPOqspsX8f4SWAV4LfRQfwigxJunh6IwCl9BkVgqeNWYznGk9hSeprJR0ZneJMSvFCZdRlqoNUmcIHIt1IHGI2+xaOpdpYhO/USnMQoBUegCUKJMPtlRJOTqEH2YvI4uSJed2v+RuJgrKqVaHQXpaYds7pdgvKdOS4iqvPWBXm3BaQLIvG8/J9GL60ZYce4CotoH5bpNyuiQ24E0CggZrrarUNIquBN6sUkBxrNcOfwKGH6kmLdehLyXibqDoom8ftORp9p0aVTWSdsmdR+lXc7kd3PVILvoZSr9/mYORBbV0yZP0eZCJUST1u3EXxX+0yGX3xovcVBtabzoikpmSqcdZ+L8uepC6UE9v2++MVrwdZQAAtn0tNv3l8Mu0YSKXp0/HMGG2N7hkhwUGbY9HEdTVJF+98iL4FGdXz0hj/LPoy7+YAOxASZzXZh/kvLB89OZULLT72dP0j5GNQ9KNlg0fUf1iLrPg8qNxumd6hFHPw/qxZSJ8xrMqeZAefj+TNH4aH6COmukHpIHUhjLQfHSeP4WhNo1plQLQvHS1N8sCeWZLsAloXhguAAXhVobRsqLQpme5CwKZXow/2NQ3m7nfdkuMVt/PwMV18/BYZ8Ga32yh7dmKeCfgPIPbNjvy2HjL1mqjRu8xkipfgCqZ5ewBGSlTRiY5cVmQ3nH7c0DQT5rWh+Xgbo72Aahidr7RXRKkSoRG3x7kxiZz5lQhUpzwxptb7b8ZkL1Kh0RG7R9vDFRqnlQO+USxy/Q8MLoWuc8KMRCCzRltzPyfvOgEF8mDlgPswzwLKgdkjoVb9j684xyiLOgfGSBQ4UqlVGcMAvqBXkHTXL6+N+hnrHwFk8j/n8odC5w/2eUbp0FlWFLKSSE2mCW0EH9CiinU78ayk2fg3JQVFBu9TkoB+WgHJSDclAOykE5KAfloH4nlNvNjFDnUVgeCr9See6Nf+MHvWgXot+QNTpHRy+fXrK9ANrLpypBP0eBnnLf9g+U/a9LHcm9skmhyUiJXn1tNzK7GARhF9XrifSHm8uGMrtvUke6JCfIfTntMTzW/KuVCvhpeRDVfUh9CRHlq/DIvUqYikGTrx//jS62iG2VnthYlsfKAkZWlnqysiiWleXDrCy0ZmdJOsuK97HS3jKHNhWErM4FIe0snWlnkVFuVznWfwfvYbBJFbEKAAAAAElFTkSuQmCC"
                                alt="Linkedin"
                                width={32}
                                height={32}
                            />
                        </a>
                        <a href={membro.github} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="data:image/png;base64,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"
                                alt="Linkedin"
                                width={32}
                                height={32}
                            />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
