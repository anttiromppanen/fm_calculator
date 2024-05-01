import { ChangeEventHandler } from "react";

function Header() {
  const handleThemeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value === "1")
      document.documentElement.setAttribute("data-theme", "blue");
    else if (e.target.value === "2")
      document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.setAttribute("data-theme", "purple");
  };

  return (
    <div className="flex justify-between">
      <p className="text-userTextColor text-3xl font-semibold">calc</p>
      <input
        type="range"
        name="theme_selector"
        id="theme_selector"
        onChange={handleThemeChange}
        min={1}
        max={3}
        step={1}
        defaultValue={1}
        className="h-7 rounded-full"
      />
    </div>
  );
}

export default Header;
