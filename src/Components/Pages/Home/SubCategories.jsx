import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryDetail from './SubCategoryDetail';

const SubCategories = ({ allToys }) => {
    const birdsToy = allToys.filter(bird => bird.subCategory == "Birds Toys")
    const mammalToy = allToys.filter(mammal => mammal.subCategory == "Mammals Toys")
    const reptileToy = allToys.filter(reptile => reptile.subCategory == "Reptile Toys")

    return (
        <div>
            <h1 className='text-center text-4xl mb-8 mt-4 text-blue-500 font-bold'>Watch different categories of toys</h1>
            <Tabs className="mx:3 md:mx-12">
                <TabList className="text-white flex justify-around px-2 py-2">
                    <Tab className="tab-container" >Mammals Toys</Tab>
                    <Tab className="tab-container" >Birds Toys</Tab>
                    <Tab className="tab-container" >Reptile Toys </Tab>
                </TabList>
                <TabPanel className="w-full">
                    <div className='grid grid-cols-3 gap-1 lg:gap-7'>
                        {
                            mammalToy.map(m => <SubCategoryDetail key={m._id}>{m}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='grid grid-cols-3 gap-1 lg:gap-7'>
                        {
                            birdsToy.map(b => <SubCategoryDetail key={b._id}>{b}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='grid grid-cols-3 gap-1 lg:gap-7'>
                        {
                            reptileToy.map(r => <SubCategoryDetail key={r._id}>{r}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategories;