import styled from "styled-components"

const ButtonTheme = styled.div`
    margin-top: -20px;
    margin-left: 10px;


.dark_mode_label {
    width: 65px;
    height: 30px;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 200px;
    box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
        inset 0px -5px 15px rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: 0.3s;
}
.dark_mode_label:after {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    top: 3px;
    left: 3px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}
.dark_mode_input {
    width: 0;
    height: 0;
    visibility: hidden;
}
.dark_mode_input:checked + .dark_mode_label {
    background: #242424;
}
.dark_mode_input:checked + .dark_mode_label:after {
    left: 62px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
}
.dark_mode_label:active:after {
    width: 30px;
}

.dark_mode_label img {
    position: absolute;
    width: 20px;
    top: 5px;
    z-index: 100;
}
.dark_mode_label .sun {
    left: 5px;
    fill: #fff;
    transition: 0.3s;
}
.dark_mode_label .moon {
    left: 40px;
    fill: #7e7e7e;
    transition: 0.3s;
}
.dark_mode_input:checked + .dark_mode_label .sun {
    fill: #7e7e7e;
}
.dark_mode_input:checked + .dark_mode_label .moon {
    fill: #fff;
}        
`

export { ButtonTheme }