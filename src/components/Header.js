import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/reducer'
import { ReactComponent as  UserIc} from "../assets/user-svg.svg"
import SearchIcon from '@mui/icons-material/Search';
import MenuIc from "../assets/menu"

function Header(props) {
  const { auth, username } = useSelector(store => store)
  const dispatch = useDispatch()
  const [menu, setMenu] = useState(false)

  return (
    <Wrapper>
        <div className='left-side'>
          <div className='input-container'>
            <SearchIcon />
           <input onChange={(event) => props.setInputValue(event.target.value)} type="text" placeholder='Search Product . . . ' />
          </div>
          {menu ? "" : (
            <div>
              <Link Link to="/">Home Page</Link>
              { auth && <Link to="/add-product">Add Product</Link> }
            </div>
          )}
        </div>

        <div className='right-side'>
        {menu ? "" : (
          <div>
            { auth ? "" : <Link to="signup">Sign Up</Link>}
            { auth ? <Link className='logout' to="/" onClick={() => dispatch(logout())}>Log Out</Link> : <Link to="/login">Log In</Link> }
          </div>
        )}
          {username && <div className='user-box'> <UserIc /> {username}</div>}
          <img className='menu-ic' onClick={() => setMenu(true)} src={MenuIc} alt="" />
        </div>

        {menu ? (
          <div className='menu-container'>
            <Link Link to="/">Home Page</Link>
            { auth && <Link to="/add-product">Add Product</Link>}
            { auth ? "" : <Link to="signup">Sign Up</Link>}
            { auth ? <Link className='logout' to="/" onClick={() => dispatch(logout())}>Log Out</Link> : <Link to="/login">Log In</Link> }
          </div>
            
          ) : ""}
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header `
    height: 70px;
    background-color: #3874CB;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    gap: 10px;

    .menu-ic {
      display: none;
    }

    .menu-container {
      width: 200px;
      height: 400px;
      background-color: red;
    }

    @media (max-width: 800px) {
      .menu-ic {
        display: block;
        cursor: pointer;
      }
      /* a {
        display: none;
      } */
    }

    .left-side {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .right-side {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .input-container {
      background-color: #FFFFFF;
      border-radius: 4px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      input {
        width: 130px;
        height: 39px;
        border-radius: 4px;
        border: none;
        outline: none;
        padding: 0 10px;
        transition: 0.3s;

        :focus {
          width: 180px;
        }
      }
    }

    a {
        text-decoration: none;
        color: #3874CB;
        font-size: 16px;
        background-color: white;
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid white;
        transition: 0.3s;

        :hover {
            color: white;
            background-color: transparent;
        }
    }

    .logout {
      background-color: red;
      color: white;
    }

    .user-box {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      display: flex;
      align-items: center;
      letter-spacing: -0.011em;
      color: #FFFFFF;
    }

    .user-ic {
      width: 20px;
      height: 20px;
      color: white;
    }
`