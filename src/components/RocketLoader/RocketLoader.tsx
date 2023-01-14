import React from "react";
import * as moment from "moment";
import * as momentTZ from "moment-timezone";
import * as lodash from "lodash";
import * as rxjs from "rxjs";
import * as formik from "formik";
import * as reactHookForm from "react-hook-form";
import * as reactQuery from "react-query";
import * as underscore from "underscore";
import * as ramda from "ramda";
import axios from "axios";
import { ReactComponent as RocketLoading } from "../../assets/images/launch.svg";
import "./RocketLoader.css";
import { useEffect } from "react";

const RocketLoader = () => {
	// component with performance bottleneck
	useEffect(() => {
		for (let i = 0; i < 100_000; i++) {
			console.log("buongiorno");
		}
	}, []);

	return (
		<div className="rocket-loader__wrapper">
			<div className="pulse rocket-loader">
				<RocketLoading width="100" height="100" />
			</div>
		</div>
	);
};

export default RocketLoader;
