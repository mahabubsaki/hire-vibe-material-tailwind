import { Switch } from "@material-tailwind/react";
import { memo, useContext, useEffect } from "react";
import { AuthContext } from "../../provider/FirebaseProvider";

const ToggleTheme = () => {

    const { theme, setTheme } = useContext(AuthContext);


    useEffect(() => {
        // Apply the theme from state when component mounts or `theme` changes
        if (theme === 'dark') {
            document.querySelector("html").setAttribute('data-theme', 'dark');
            document.querySelector("body").classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.querySelector("html").setAttribute('data-theme', 'light');
            document.querySelector("body").classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = (e) => {
        console.log('toggle');
        setTheme(e.target.checked ? 'dark' : 'light');
    };


    return (
        <div>
            <label className="cursor-pointer  grid place-items-center ">
                <Switch color={theme === 'dark' ? 'blue' : 'blue-gray'} ripple={true} onChange={toggleTheme} checked={theme === 'dark'} />
            </label>
        </div>
    );
};

export default memo(ToggleTheme);