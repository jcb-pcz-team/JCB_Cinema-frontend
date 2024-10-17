import './Home.scss';
import {useState} from "react";

export const Home = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="home">
            <main className="content">
                <h1 className="primary-heading">Twój filmowy świat na wyciągnięcie ręki</h1>
                <p className="paragraph">Gotowy do oglądania? Wprowadź swój adres e-mail, aby utworzyć konto.</p>
                <form onSubmit={handleSubmit} className="registration-input">
                    <input
                        type="text"
                        placeholder="Email lub login"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email-input"
                    />
                    <button type="submit" className="submit-button">UTWÓRZ</button>
                </form>
            </main>
        </div>
    )
}