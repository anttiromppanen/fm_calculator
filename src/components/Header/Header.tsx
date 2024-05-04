import { ChangeEventHandler } from "react";

// used for getting the correct defaultValue for radio input on first mount
const themes = ["blue", "light", "purple"];

function Header() {
  const savedTheme = localStorage.getItem("theme");
  const handleThemeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    switch (e.target.value) {
      case "1":
        document.documentElement.setAttribute("data-theme", "blue");
        localStorage.setItem("theme", "blue");
        break;
      case "2":
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        break;
      case "3":
        document.documentElement.setAttribute("data-theme", "purple");
        localStorage.setItem("theme", "purple");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex h-fit items-center justify-between">
      <p className="text-3xl font-semibold text-userMainTextColor">calc</p>
      <div className="flex items-end gap-x-5 text-userMainTextColor">
        <p className="text-sm tracking-wider">THEME</p>
        <div className="flex flex-col">
          <div className="flex w-full justify-between px-2 text-xs font-bold">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <input
            type="range"
            name="theme_selector"
            id="theme_selector"
            list="theme_modes"
            onChange={handleThemeChange}
            min={1}
            max={3}
            step={1}
            defaultValue={savedTheme ? themes.indexOf(savedTheme) + 1 : 1}
            className="
            [&::] h-[28px] w-[72px] rounded-full !bg-userRadioBg
            p-1 transition-colors
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-userRadioThumbBg
            "
            style={{
              WebkitAppearance: "none",
              MozAppearance: "none",
              appearance: "none",
              cursor: "pointer",
              background: "transparent",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
