// @flow
import * as React from 'react';
import {ConfigPage} from "../componnets/ConfigPage";
import InfoBox from "../componnets/InfoBox";
import SmallBox from "../componnets/SmallBox";
import {faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import Cards from "../componnets/Cards";


type Props = {

};
 const Widgets = (props: Props) => {
    return (
        <div>
            <ConfigPage title="Widgets" BodyCss='hold-transition sidebar-mini layout-fixed' >

                <div className="container-fluid">
                    <h5 className="mb-2">Info Box</h5>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'1,410'} icon='envelope' bgBoxIcon={"info"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'1,410'} icon='flag' bgBoxIcon={"success"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'1,410'} icon='copy' bgBoxIcon={"warning"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'1,410'} icon='star' bgBoxIcon={"danger"} />
                        </div>

                    </div>
                    <h5 className="mb-2">Info Box With Custom Shadows <small><i>Using Bootstrap's Shadow
                        Utility</i></small></h5>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'1,410'} icon='envelope' bgBoxIcon={"info"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'1,410'} icon='flag' shadows={"small"} bgBoxIcon={"success"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'1,410'} icon='copy' shadows={"regular"} bgBoxIcon={"warning"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'1,410'} icon='star' shadows={"large"} bgBoxIcon={"danger"} />
                        </div>

                    </div>
                    <h5 className="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'41,410'} icon='bookmark' progress={70} progressMessage={'Increase in 30 Days'} bg={"info"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'41,410'} icon='thumbs-up' shadows={"small"}  progress={70} progressMessage={'Increase in 30 Days'} bg={"success"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'41,410'} icon='calendar' shadows={"regular"} progress={70} progressMessage={'Increase in 30 Days'} bg={"warning"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'41,410'} icon='comments' shadows={"large"} progress={70} progressMessage={'Increase in 30 Days'} bg={"danger"} />
                        </div>
                    </div>
                    <h5 className="mt-4 mb-2">Info Box With <code>bg-gradient-*</code></h5>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'41,410'} icon='bookmark' progress={70} isGradient={true} progressMessage={'Increase in 30 Days'} bg={"info"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'41,410'} icon='thumbs-up' shadows={"small"} isGradient={true}  progress={70} progressMessage={'Increase in 30 Days'} bg={"success"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'41,410'} icon='calendar' shadows={"regular"} isGradient={true} progress={70} progressMessage={'Increase in 30 Days'} bg={"warning"} />
                        </div>

                        <div className="col-md-3 col-sm-6 col-12">
                            <InfoBox message={'Message'} number={'41,410'} icon='comments' shadows={"large"} isGradient={true} progress={70} progressMessage={'Increase in 30 Days'} bg={"danger"} />
                        </div>
                    </div>
                    <h5 className="mb-2 mt-4">Small Box</h5>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <SmallBox message="New Order" number={150} icon='shopping-cart' bg={"info"} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <SmallBox message="Bounce Rate" number={53} icon='chart-bar' bg={"success"} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <SmallBox message="User Registrations" number={44} icon='user-plus' bg={"warning"} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <SmallBox message="Unique Visitors" number={65} icon='chart-pie' bg={"danger"} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <SmallBox message="New Order" number={150} icon='sync-alt' bg={"info"} loading={true} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <SmallBox message="Bounce Rate" number={53} icon='sync-alt' bg={"success"} loading={"dark"} />
                        </div>
                    </div>
                    <h4 className="mb-2 mt-4">Cards</h4>
                    <h5 className="mb-2">Abilities</h5>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <Cards collapse={true} >
                                The body of the card
                            </Cards>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <Cards />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <Cards  />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <Cards />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <Cards collapse={true} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <Cards />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <Cards  />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <Cards />
                        </div>
                    </div>
                </div>
            </ConfigPage>
        </div>
    );
};
 export default Widgets;
