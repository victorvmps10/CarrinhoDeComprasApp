import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 25px;
`;

export const Dot = styled.View`
    align-items: center;
    z-index: 9;
    width: 20px;
    background-color: red;
    height: 20px;
    border-radius: 12px;
    position: absolute;
    bottom: -2px;
    left: -4px;
`;

export const DocText = styled.Text`
    color: #fff;
`;
