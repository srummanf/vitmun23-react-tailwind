import React from 'react'
import styles from '../../components/Commitees/styles/style.module.css'
import unsc from '../../components/Commitees/assets/unsc.png'
import ungaDisec from '../../components/Commitees/assets/unga disec.png'
import lokSabha from '../../components/Commitees/assets/lok sabha.png'
import ecoSoc from '../../components/Commitees/assets/ECOSOC.png'
import ungaSochum from '../../components/Commitees/assets/unga sochum.png'
import ipc from '../../components/Commitees/assets/IPC.png'
import trilateralCommission from '../../components/Commitees/assets/trilateral commision.png'
import Navbar from '../../components/Navbar'

function index() {
    return (
        <>
            <Navbar />
            <h1>Committees</h1>
            <div className="general">
                <p>
                    The objective of the VITCMUN is to facilitate novel discussions on
                    pressing contemporary issues. Committees focus both on Indian issues
                    with Lokh sabha and also international affairs. The MIUN also provides
                    focus on diverse fields like Economics, Culture, Military Affairs etc.
                    Regional committees like the Trilateral commission also provide
                    alternative perspectives on the world order. The scope of these
                    committees is limited only by the ingenuity of the delegates
                </p>
                <br />
            </div>
            <div className="com1">
                <div className="img1">
                    <img src={unsc} alt="unsc" />
                </div>
                <div className="disc1">
                    <h3>United Nations Security Council</h3>
                    <p>
                        One of the United Nations' six principal organs, the United Nations
                        Security Council (UNSC) is in charge of maintaining world peace and
                        security.This fifteen-member council, including its five permanent
                        members, seeks to address threats to international security and have
                        primary control over all executive actions taken by the United
                        Nations.
                    </p>
                </div>
            </div>
            <div className="com2">
                <div className="disc2">
                    <h3>
                        United Nations General Assembly Disarmament and International
                        Security Committee
                    </h3>
                    <p>
                        Being the First Committee of the General Assembly, DISEC deals with
                        international disarmament, global challenges and threats to peace
                        that affect the international community and seeks out solutions to
                        the challenges in the international security regime.
                    </p>
                </div>
                <div className="img2">
                    <img src={ungaDisec} alt="unga discec" />
                </div>
            </div>
            <div className="com3">
                <div className="img3">
                    <img src={lokSabha} alt="lok sabha" />
                </div>
                <div className="disc3">
                    <h3>Lok Sabha</h3>
                    <p>
                        Lok Sabha - the lower house of parliament is composed of
                        representatives of the people chosen by direct election on the basis
                        of universal adult suffrage.The maximum strength of Lok sabha by the
                        Constitution is 552, which is made up by election of upto 530
                        members to represent the States, upto 20 members to represent the
                        Union Territories. The members of the parliament represent the
                        people from their own constituency which ensures the direct
                        principle of the democratic participation.
                    </p>
                </div>
            </div>
            <div className="com4">
                <div className="disc4">
                    <h3>Economic and Social Council</h3>
                    <p>
                        The Economic and Social Council (ECOSOC), one of the six main organs
                        of the United Nations, discusses economic, social, and environmental
                        policy in order to achieve commonly agreed-upon international policy
                        goals (like the Sustainable Development Goals). Collaboration with
                        subsidiary organisations including regional economic and social
                        commissions, commissions that enable intergovernmental discourse,
                        expert bodies, specialised agencies, etc., makes up the majority of
                        ECOSEC's activities. The organization's current focus is on
                        implementing the 2030 Agenda for Sustainable Development, serving as
                        "a coordinator, convener, and specialised body for policy dialogue,
                        policy-making, and the forging of consensus towards the
                        implementation of the 2030 Agenda for Sustainable Development as
                        well as other major UN conferences and summits," as well as
                        documenting and minimising the effects of COVID 19, and other global
                        challenges.
                    </p>
                    <div className="img4">
                        <img src={ecoSoc} alt="ecosoc" />
                    </div>
                </div>
            </div>
            <div className="com5">
                <div className="img5">
                    <img src={ungaSochum} alt="unga sochum" />
                </div>
                <div className="disc5">
                    <h3>
                        United Nations General Assembly Social, Humanitarian & Cultural
                        Committee
                    </h3>
                    <p>
                        Social, cultural, and humanitarian issues, including but not limited
                        to human rights jurisprudence, are the main focus of the Social,
                        Humanitarian, and Cultural Committee (SOCHUM). The Committee
                        collaborates with experts, special rapporteurs, and working group
                        leaders under the direction of the UNHRC to develop policies for
                        women, indigenous peoples, youth, and other emerging social
                        demographics. The Committee also examines the UNHRC's special
                        procedure reports. Although the Committee addresses a broad range of
                        social and cultural challenges, human rights were the subject of 50
                        percent of the 62 resolutions submitted at the Committee's 76th
                        session.
                    </p>
                </div>
            </div>
            <div className="com6">
                <div className="disc6">
                    <h3>International Press Corps</h3>
                    <p>
                        The role of the international press at the UN is to inform the
                        public about the organization's activities and initiatives and to
                        promote transparency, accountability, and global cooperation.The
                        international press is essential for promoting the free flow of
                        information and ideas, and for ensuring that people have access to
                        accurate and diverse sources of news and information.
                    </p>
                    <div className="img6">
                        <img src={ipc} alt="ipc" />
                    </div>
                </div>
            </div>
            <div className="com7">
                <div className="img7">
                    <img src={trilateralCommission} alt="trilateral commision" />
                </div>
                <div className="disc7">
                    <h3>
                        Trilateral Commission
                        <a href='/'>( Flagship Committee of VITCMUN )</a>
                    </h3>
                    <p>
                        When it was established in 1973, the Trilateral Commission's main
                        goals were to address the interdependence of the US and its allies
                        (Canada, Japan, and western Europe) and to promote closer
                        collaboration between the allies. It is headed by three regional
                        chairs (for Europe, North America, and the Asia-Pacific Region), who
                        are assisted by deputies and an executive committee. The different
                        membership quotas allotted to each nation demonstrate its the value
                        of conomic weight and political influence on the Commission. The
                        commission reflects its political and commercial interests in its
                        commitment to the core values of private enterprise and stronger
                        collective management of global problems.
                    </p>
                </div>
            </div>
        </>
    )
}

export default index