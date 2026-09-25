import { LuRefreshCw, LuTarget, LuPuzzle, LuLayers } from "react-icons/lu";
import { abilities } from "../constants";

const iconMap = {
  refresh: LuRefreshCw,
  target: LuTarget,
  puzzle: LuPuzzle,
  layers: LuLayers,
  "Adaptable Developer": LuRefreshCw,
  "Quality Focus": LuTarget,
  "Problem Solver": LuPuzzle,
  "Full Stack Development": LuLayers,
};

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ title, desc, icon }) => {
        const Icon = (icon && iconMap[icon]) || iconMap[title] || LuRefreshCw;

        return (
          <div
            key={title}
            className="card-border feature-card rounded-xl p-8 flex flex-col gap-4 cursor-default"
          >
            <div className="size-14 feature-icon-wrapper flex items-center justify-center rounded-full">
              <Icon size={32} className="text-white" />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default FeatureCards;