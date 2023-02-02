import { ShowProducts } from '../Components/Products/ShowProducts';
import { PrimaryNavbar } from '../Components/Navbars/PrimaryNavbar';
import { PrimaryCarousel } from '../Components/Carousel/PrimaryCarousel';
import { PrimaryFooter } from '../Components/Footers/PrimaryFooter';
import { SecondaryNavbar } from '../Components/Navbars/SecondaryNavbar';
import { ProductContext } from '../Components/Context/ProductContext';
import { CartContext } from '../Components/Context/CartContext';
import { Head } from '@inertiajs/inertia-react';
import { useState } from 'react';

export default function Team(props) {


    return (
        <>
            <PrimaryNavbar
                route={route}
                auth={props.auth}
                img={'storage/imgs/welcome/online-shop.png'}
                title={'Ecommerce'}
                telephone={'(0216) 335 00 55'}
            />

            <Head title="Team" />

            <SecondaryNavbar />

            <div className="container mx-auto py-4 px-2 lg:px-12 xl:px-24 2xl:px-48">

                <p className="text-5xl bold justify-center text-center">Team</p>

                <div class="flex flex-row px-4 mt-8  text-justify">
                    <div class="basis-2/3">
                        <p className="p-4">Without a Brussels Sprout mate. Sebs. Must be true cos I read it in the Currant Bun. K Y Jelly. Put a Roof on yer Boat. Native New Yorker. Lend us a John Dillon. Brian Clough. You bit Tom Thumb. Hat and Scarf. Get your Blade over 'ere. James Dean. She's popped a wet and wild. Lauren Riddle. You don't get much change from a Cock and Hen for a pint of Pig's Ear in this Battle Cruiser.</p>
                        <p className="p-4">Up the Apples and Pears to Bedfordshire. Bees and Honey. I'm going to burst if I don't go for a Barry…. Half Inch. Got to go down the dentist to have me 'Ampsteads looked at. Orange and Pear. He's got the right Jeremy. Kangaroo Pouch. Can be used against any jokers, e. g My manager is a bit of a 'Gordon'. Tom Cruise. Harry got Doner Kebebbed last night. Cup of tea, sausage and a slice. </p>
                    </div>
                    <div class="basis-1/3 content-center">
                        <img className="rounded-2xl mx-auto" src="/storage/imgs/team/1.png" />
                    </div>
                </div>

                <div class="flex flex-row px-4 mt-8 justify-center">
                    <div class="basis-1/3 content-center">
                        <img className="rounded-2xl mx-auto" src="/storage/imgs/team/2.png" />
                    </div>
                    <div class="basis-2/3  text-justify">
                        <p className="p-4">Without a Brussels Sprout mate. Sebs. Must be true cos I read it in the Currant Bun. K Y Jelly. Put a Roof on yer Boat. Native New Yorker. Lend us a John Dillon. Brian Clough. You bit Tom Thumb. Hat and Scarf. Get your Blade over 'ere. James Dean. She's popped a wet and wild. Lauren Riddle. You don't get much change from a Cock and Hen for a pint of Pig's Ear in this Battle Cruiser.</p>
                        <p className="p-4">Up the Apples and Pears to Bedfordshire. Bees and Honey. I'm going to burst if I don't go for a Barry…. Half Inch. Got to go down the dentist to have me 'Ampsteads looked at. Orange and Pear. He's got the right Jeremy. Kangaroo Pouch. Can be used against any jokers, e. g My manager is a bit of a 'Gordon'. Tom Cruise. Harry got Doner Kebebbed last night. Cup of tea, sausage and a slice. </p>
                    </div>
                </div>

                <div class="flex flex-row px-4 mt-8  text-justify">
                    <div class="basis-2/3">
                        <p className="p-4">Without a Brussels Sprout mate. Sebs. Must be true cos I read it in the Currant Bun. K Y Jelly. Put a Roof on yer Boat. Native New Yorker. Lend us a John Dillon. Brian Clough. You bit Tom Thumb. Hat and Scarf. Get your Blade over 'ere. James Dean. She's popped a wet and wild. Lauren Riddle. You don't get much change from a Cock and Hen for a pint of Pig's Ear in this Battle Cruiser.</p>
                        <p className="p-4">Up the Apples and Pears to Bedfordshire. Bees and Honey. I'm going to burst if I don't go for a Barry…. Half Inch. Got to go down the dentist to have me 'Ampsteads looked at. Orange and Pear. He's got the right Jeremy. Kangaroo Pouch. Can be used against any jokers, e. g My manager is a bit of a 'Gordon'. Tom Cruise. Harry got Doner Kebebbed last night. Cup of tea, sausage and a slice. </p>
                    </div>
                    <div class="basis-1/3 content-center">
                        <img className="rounded-2xl mx-auto" src="/storage/imgs/team/3.png" />
                    </div>
                </div>

                <div class="flex flex-row px-4 mt-8 justify-center">
                    <div class="basis-1/3 content-center">
                        <img className="rounded-2xl mx-auto" src="/storage/imgs/team/4.png" />
                    </div>
                    <div class="basis-2/3  text-justify">
                        <p className="p-4">Without a Brussels Sprout mate. Sebs. Must be true cos I read it in the Currant Bun. K Y Jelly. Put a Roof on yer Boat. Native New Yorker. Lend us a John Dillon. Brian Clough. You bit Tom Thumb. Hat and Scarf. Get your Blade over 'ere. James Dean. She's popped a wet and wild. Lauren Riddle. You don't get much change from a Cock and Hen for a pint of Pig's Ear in this Battle Cruiser.</p>
                        <p className="p-4">Up the Apples and Pears to Bedfordshire. Bees and Honey. I'm going to burst if I don't go for a Barry…. Half Inch. Got to go down the dentist to have me 'Ampsteads looked at. Orange and Pear. He's got the right Jeremy. Kangaroo Pouch. Can be used against any jokers, e. g My manager is a bit of a 'Gordon'. Tom Cruise. Harry got Doner Kebebbed last night. Cup of tea, sausage and a slice. </p>
                    </div>
                </div>

            </div>

            <PrimaryFooter />
        </>
    );
}
