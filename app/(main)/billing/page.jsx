// app/billing/page.tsx or wherever your billing component is
"use client";
import FeatureMotionWrapper from "@/app/_components/FramerMotion/FeatureMotionWrapperMap";
// import { useAuthContext } from "@/app/provider";
// import { useAuthContext } from "../provider";
// import { useAuthContext } from '@/app/(main)/provider'
import { useAuthContext } from "@/app/provider";

import { Button } from "@/components/ui/button";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CircleDollarSign } from "lucide-react";
import { IndianRupeeIcon } from "lucide-react";

import React,{useState} from "react";
import { toast } from "sonner";

const creditsPlan = [
    { credits: 20, cost: 10 },
    { credits: 100, cost: 50 },
    { credits: 399, cost: 199 },
    { credits: 899, cost: 400 },
    { credits: 1050, cost: 500 }
];

export default function Billing() {
    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);

    const onPaymentSuccess = () => {
        // save user credits
    }

    const initiatePayment = async (plan) => {
        setIsLoading(true);
        try {
            // Get user email from the context/provider
            const userEmail = user?.email;

            if (!userEmail) {
                toast.error("Could not determine user email. Please try again.");
                return;
            }

            const response = await fetch("/api/create-payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: plan.cost,
                    credits: plan.credits,
                    userEmail: userEmail,
                    itemName: `${plan.credits} AI Video Credits`,
                }),
            });

            if (!response.ok) {
                toast.error("Failed to initiate payment");
                return;
            }

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                toast.error("Failed to initiate payment");
            }
        } catch (error) {
            toast.error("Error initiating payment");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2 className="font-bold text-3xl">Credits</h2>
            <div className="p-4 border rounded-xl flex justify-between">
                <div>
                    <h2 className="font-bold text-xl">Total Credits Left</h2>
                    <h2 className="text-sm">1 Credits = 1 Video</h2>
                </div>
                <h2 className="font-bold text-3xl">{user?.credits} Credits</h2>
            </div>
            <p className="text-sm p-5 max-w-2xl text-center">
                When Your Credit Balance Reaches 0 Your Video Generation Will Stop Working, Add Credits To Continue Making Videos
            </p>
            <div className="mt-5">
                <h2 className="font-bold text-2xl">Buy More Credits</h2>
                <div className="">
                    {creditsPlan.map((plan, index) => (
                        <FeatureMotionWrapper key={index} index={index}>
                            <div className="p-5 mt-3 border rounded-xl max-w-300 flex justify-between items-center">
                                <h2 className="text-xl flex gap-2 items-center">
                                    <CircleDollarSign /> <strong>{plan.credits} Credits</strong>
                                </h2>
                                <div className="flex gap-2 items-center ml-auto">
                                    <h2 className="font-medium text-xl">Rs. {plan.cost} </h2>
                                    <Button
                                        onClick={() => initiatePayment(plan)}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Processing..." : "Buy Now"}
                                    </Button>

                                      
                                </div>
                            </div>
                        </FeatureMotionWrapper>
                    ))}
                </div>
            </div>
        </div>
    );
}