import React from "react"
import { TopSlider } from "../HomePage/Sliders/TopSlider";
import { FacilitiesTab } from "../HomePage/FacilitiesTab/FacilitiesTab";
import { SearchForm } from "../HomePage/SearchForm/SearchForm";
import { BestSellerCarousel } from "../HomePage/Best Seller Products/BestSellerCarousel/BestSellerCarousel";
import { BestSellerCarouselMid } from "../HomePage/Best Seller Products/BestSellerCarouselMid/BestSellerCarouselMid";
import { BestSellerCarouselMin } from "../HomePage/Best Seller Products/BestSellerCarouselMin/BestSellerCarouselMin";
import { FacilitiesTabCarousel } from "../HomePage/FacilitiesTab/FacilitiesTabCarousel";
import { Presentation1 } from "../HomePage/Presentation1/Presentation1";
import { Presentation2 } from "../HomePage/Presentation2/Presentation2";
import { Presentation3 } from "../HomePage/Presentation3/Presentation3";
import { NewSummerSalesMax } from "../HomePage/NewSummerSales/NewSummerSalesMax/NewSummerSales";
import { NewSummerSalesMid } from "../HomePage/NewSummerSales/NewSummerSalesMid/NewSummerSalesMid";
import { NewSummerSalesMin } from "../HomePage/NewSummerSales/NewSummerSalesMin/NewSummerSalesMin";
import { PopularCategoryMax } from "../HomePage/PopularCategoryMax/PopularCategoryMax";
import { PopularCategoryMin } from "../HomePage/PopularCategoryMin/PopularCategoryMin";
import { Feedback } from "../HomePage/Feedback/Feedback";
import { Presentation4 } from "../HomePage/Presentation4/Presentation4";
import { QandA } from "../HomePage/Q&A/QandA";
import { FreeDelivery } from "../HomePage/FreeDelivery/FreeDelivery";
import STYLE from "./HomePage.module.css"
import bestSellerItems from "../../data/Best Seller Items/BestSellerItems.json"

export function HomePage() {
    return (
        <div className={STYLE.cadouri}>
            <TopSlider />
            <div className={STYLE.maxSize}>
                <SearchForm />
                <FacilitiesTab />
            </div>
            <div className={STYLE.minSize}>
                <FacilitiesTabCarousel />
                <SearchForm />
            </div>

            <BestSellerCarousel
                items={bestSellerItems} />
            <BestSellerCarouselMid
                items={bestSellerItems} />
            <BestSellerCarouselMin
                items={bestSellerItems} />

            <Presentation1 />
            <Presentation2 />
            <Presentation3 />

            <NewSummerSalesMax />
            <NewSummerSalesMid />
            <NewSummerSalesMin />

            <div className={STYLE.popularCategoryMaxSize}>
                <PopularCategoryMax />
            </div>
            <div className={STYLE.popularCategoryMinSize}>
                <PopularCategoryMin />
            </div>
            <Feedback />
            <Presentation4 />
            <QandA />
            <FreeDelivery />
        </div>
    )
}