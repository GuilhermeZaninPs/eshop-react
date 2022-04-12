import styled from "styled-components";
export const navStyle = styled.div`
    .navbar {
        padding: 10px 25px;
        background-color: #dee6ed;
        width: 75%;
        max-width: 880px;
        margin: auto;
        heigth: 56px;
        .navbar-nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .navbar-brand {
                font-size: 20px;
            }
            .register {
                margin-top: 5px;
                text-decoration: none;
            }
        }
        @media(max-width: 620px) {
            width: 100% !important;
        }

    }          
`;
export const box = styled.div`
    max-width: 400px;
    margin-top: 80px;    
    heigth: auto;
    
    @media(max-width: 420px) {
        max-width: 95%;
      }
    
`;