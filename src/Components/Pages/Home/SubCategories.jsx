import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryDetail from './SubCategoryDetail';

const SubCategories = ({ allToys }) => {
    const animalFigures = allToys.filter(bird => bird.subCategory == "Car Toy")
    const plushToy = allToys.filter(mammal => mammal.subCategory == "Bike Toy")
    const interactivePets = allToys.filter(reptile => reptile.subCategory == "Architecture Toy")

    return (
        <div>
            <h1 className='text-center text-2xl md:text-4xl mb-8 mt-4 font-bold'>Watch different categories of toys</h1>
            <Tabs className="mx-3 md:mx-12">
                <TabList className="text-white justify-around flex gap-3 px-2 py-2">
                    <Tab className="tab-container" >Bike Toys</Tab>
                    <Tab className="tab-container" >Car Toys</Tab>
                    <Tab className="tab-container" >Architecture Toys </Tab>
                </TabList>
                <TabPanel className="w-full">
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-7'>
                        {
                            plushToy.map(m => <SubCategoryDetail key={m._id}>{m}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-7'>
                        {
                            animalFigures.map(b => <SubCategoryDetail key={b._id}>{b}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-7'>
                        {
                            interactivePets.map(r => <SubCategoryDetail key={r._id}>{r}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategories;