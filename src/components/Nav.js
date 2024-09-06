import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <StyledNav>
      <div className="navbar">
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              Cart
              <FiShoppingCart className="cart-trolley" />
            </NavLink>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 1.2rem 2rem;
  box-shadow: none; /* Removed box shadow for simplicity */

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-lists {
    display: flex;
    gap: 3.6rem;
    align-items: center;
    list-style: none;

    .navbar-link {
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: uppercase;
      color: #000; /* Black text color */
      letter-spacing: 0.1rem;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: all 0.3s ease;
      position: relative;

      &:hover {
        background-color: #f0f0f0; /* Light gray background on hover */
        color: #000; /* Ensure text remains black on hover */
        transform: translateY(-2px);
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }

  .cart-trolley--link {
    display: flex;
    align-items: center;
    position: relative;

    .cart-trolley {
      margin-left: 0.5rem;
      font-size: 2.5rem;
      color: #000; /* Black color for the icon */
    }

    .cart-total--item {
      position: absolute;
      top: -10px;
      right: -15px;
      background: #000; /* Black background for cart total item */
      color: #fff; /* White text color for contrast */
      border-radius: 50%;
      padding: 0.2rem 0.6rem;
      font-size: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .navbar-lists {
      flex-direction: column;
      gap: 2.4rem;

      .navbar-link {
        font-size: 2.4rem;
      }

      .cart-trolley--link .cart-trolley {
        font-size: 3.6rem;
      }
    }
  }
`;

export default Nav;
