/**
 * npm install react-icons --save
 * Link: https://react-icons.github.io/react-icons/
 */

import { FaBluetooth, FaAmazon, FaAws } from "react-icons/fa"

import styles from "./Icons.module.css"

function Icons() {
    return (
        <div>
            <FaBluetooth />
            <FaAmazon />
            <FaAws />
        </div>
    )
}

export default Icons