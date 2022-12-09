import { getYear } from "../utils/dates";

export const Footer = () => {
    return (
        <footer>
            <p>&copy; {getYear()} David Lisa</p>
        </footer>
    );
};

