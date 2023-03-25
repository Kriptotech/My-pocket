import style from "./styles.module.css";
import { Eye, Plus } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function Member() {
    const navigate = useNavigate();

    let name = `Frasio ${1 + Math.floor(Math.random() * 100)}`;

    return (
        <div className={style.item}>
            <div>
                <p>Nome: {name}</p>
            </div>
            <div>
                <button
                    onClick={() =>
                        navigate("/give_saving_group_member_a_rule", {
                            state: name,
                        })
                    }
                >
                    <Plus
                        color="rgb(116, 96, 238)"
                        weight="duotone"
                        size={20}
                    />
                </button>
                <button>
                    <Eye color="rgb(116, 96, 238)" weight="duotone" size={20} />
                </button>
            </div>
        </div>
    );
}
