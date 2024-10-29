import { Button } from "antd";
import { useState } from "react";
import { siderButtonList } from "../../constants/siderButtonList";
import { useNavigate } from "react-router-dom";
import styles from "./sider.module.css";

export default function Sider() {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      {siderButtonList.map((button, index) => (
        <Button
          key={index}
          className={styles.siderButton}
          color={index === selected ? "primary" : "default"}
          variant={index === selected ? "filled" : "text"}
          onClick={() => {
            if (button.href) navigate(button.href);
            setSelected(index);
          }}
        >
          <div className={styles.siderButtonContent}>{button.title}</div>
        </Button>
      ))}
    </>
  );
}
