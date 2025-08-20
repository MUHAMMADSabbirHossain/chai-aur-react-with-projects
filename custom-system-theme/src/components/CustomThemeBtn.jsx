import useTheme from "../context/theme";

function CustomThemeBtn() {
  const { defaultTheme, lightTheme, darkTheme, systemTheme } = useTheme();

  function handleThemeChange(event) {
    const selectedTheme = event.target.value;
    // console.log(selectedTheme);

    if (selectedTheme === "system") {
      systemTheme();
    } else if (selectedTheme === "light") {
      lightTheme();
    } else if (selectedTheme === "dark") {
      darkTheme();
    }
  }

  return (
    <div className="flex gap-4">
      <button className="">System</button>
      <button>Light</button>
      <button>Dark</button>

      <select
        name="theme"
        id="theme"
        className="
            block w-full
            px-4 py-2
            bg-white dark:bg-gray-800
            text-gray-700 dark:text-gray-200
            border border-gray-300 dark:border-gray-600
            rounded-lg
            shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition-colors
            cursor-pointer
        "
        onChange={handleThemeChange}
      >
        <option value="system">💻 System</option>
        <option value="light">🔆 Light</option>
        <option value="dark">🌜 Dark</option>
      </select>
    </div>
  );
}

export default CustomThemeBtn;
