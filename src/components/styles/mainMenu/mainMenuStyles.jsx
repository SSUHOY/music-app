import styled from "styled-components"


export const Main = styled.main`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
    flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
    justify-content: space-between;
`

export const PlaylistContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
height: 1200px;
margin-bottom: 80px;
padding-right: 4px;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
overflow-y: scroll;
&:hover {
    background-color: 
}
&::-webkit-scrollbar {
    background: #2e2e2e;
}
&::-webkit-scrollbar-thumb{
    background:  #f2f2f2;
    height: 15px;
  }
`

export const PlaylistItem = styled.div`

`

export const MainNav = styled.nav`
width: 264px;
background-color: #181818;
padding: 20px 0 20px 36px
`

export const NavBurger = styled.div`
width: 20px;
height: 36px;
padding: 13px 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-pack: justify;
    -ms-flex-pack: justify;
        justify-content: space-between;
        cursor: pointer;
`


export const MainCenterBlock = styled.div`
background-color: rgb(24, 24, 24);
width: auto;
  -webkit-box-flex: 3;
      -ms-flex-positive: 3;
          flex-grow: 3;
  padding: 20px 40px 20px 111px;
`


export const CenterBlockContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
`

export const MainSideBar = styled.div`
background-color: rgb(24, 24, 24);
min-width: 400px;
max-width: 418px;
padding: 20px 90px 20px 78px;
`

export const NavMenu = styled.div`
display: block;
  visibility: visible;
  transition: all 0.2s;
  transform: translateX(0%);
  &.active {
    fill: #b672ff;
    stroke:  #b672ff;
    transform: translateX(-1500%);
  }


//   transform: ${props => props.active ? "translateX(0%)" : "translateX(-1500%)"};

//   ${props => props.active && `
//     background-color: transparent;
//   `}
`;

export const NotFound = styled.div`
    display: flex;
    flex-direction: row;
`
export const SelectedFiltersCircleArtists=styled.div`
    width: 26px;
    height: 26px;
    background-color: #b672ff;
    border-radius: 16px;
    display: flex;
    margin-top: 2px;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 590px;
    top: 230px;
`

export const SelectedFiltersCircleGenres=styled.div`
    width: 26px;
    height: 26px;
    background-color: #b672ff;
    border-radius: 16px;
    display: flex;
    margin-top: 2px;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 837px;
    top: 230px;
`