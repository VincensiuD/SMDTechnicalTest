import {React} from "react";
import { imageGenerator } from "./ImageGenerator";

export function OverviewCard(props){

const title = props.title;
const number= props.number;
const icon = props.icon;
const increment = props.increment;

    return (
        <div>
            <div>
                <span>
                  {title}
                </span>
                <img src={imageGenerator(icon)} alt="social media icon"/>
            </div>
            <div>
                <div>
                    {number}
                </div>
                <div>
                    <img alt="social media icon"/>
                    <span>
                        {increment}
                    </span>
                </div>
            </div>
           

        </div>
    );
}