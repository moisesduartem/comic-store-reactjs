import { useEffect, useState } from "react";
import { shop } from "../services/shop";

export function usePurchases() {

    const [purchases, setPurchases] = useState();

    useEffect(() => {

        const loadPurchases = async () => {
            const response = await shop.purchases();
            setPurchases(response.data.purchases);
        };

        if (!purchases) {
            loadPurchases();
        }

    }, [purchases]);

    return { purchases };
}
