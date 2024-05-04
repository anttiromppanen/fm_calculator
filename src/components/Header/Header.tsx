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
    <div className="flex h-fit items-center justify-between">
      <p className="text-userMainTextColor text-3xl font-semibold">calc</p>
      <div className="text-userMainTextColor flex items-end gap-x-5">
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
            defaultValue={1}
            className="
        !bg-userRadioBg [&::] [&::-webkit-slider-thumb]:bg-userRadioThumbBg h-[28px] w-[72px]
        rounded-full p-1
        transition-colors [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
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
