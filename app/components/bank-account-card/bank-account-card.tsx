import DashCard from "../dash-card/dash-card";
import { HeadingSM, Paragraph } from "../typography/typography";
import Image from "next/image";
import { Suspense } from "react";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import dynamic from "next/dynamic";
import {FaMoneyBill} from 'react-icons/fa'
import ErrorBoundary from "../error-boundary/error-boundary";

const DynamicBankAccountChart = dynamic(
    () => import('../bank-account-chart/bank-account-chart'),
    { 
        loading: () => 
            <LoadingSpinner/>
        ,
        ssr: false, 
    }
)


const REVALIDATION_PERIOD = 60;

async function fetchBankAccountData() {
    try {
        const res = await fetch('http://localhost:3000/api/balance', {
            next:{
                revalidate: REVALIDATION_PERIOD
            }
        });
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.log('[fetching error]',error);
        return [];  
    }
}

export default async function BankAccountCard(){
    const {data}:any = await fetchBankAccountData();

    return <DashCard height="full">
        <div id="bank-account-header" className="flex items-start justify-between border-b">
            <div className="">
                <HeadingSM className="text-gray-500 mb-[-20px] flex items-center">
                    <FaMoneyBill className="inline-block mr-2" />
                    Kingpin Inc. Account</HeadingSM>
                <Paragraph className="text-gray-500">Account Number: <span className="text-primary">123456789</span></Paragraph>
            </div>
            <Image className="rounded" 
            data-testid="bank-logo"
            src="images/smugglebank.svg" width={150} height={50} alt="smugglebank Logo" />
        </div>
        <div id="bank-account-body" className="flex items-center h-full justify-between
        translate-y-[-1em] min-h-[250px]">
            <ErrorBoundary>
                <DynamicBankAccountChart data={data} data-testid="account-chart"/>
            </ErrorBoundary>
        </div>
    </DashCard>
}