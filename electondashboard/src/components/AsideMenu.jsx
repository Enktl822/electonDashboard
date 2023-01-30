import { useNavigate } from "react-router-dom";

export default function Aside(prop) {
  const { menus } = prop;
  const navigate = useNavigate();

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "20vw",
        background: "pink",
      }}
    >
      {menus.map((e, index) => (
        <div
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => {
            navigate(e.url);
          }}
        >
          {e.name}
        </div>
      ))}
    </div>
  );
}
