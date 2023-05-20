import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryDetail from './SubCategoryDetail';

const SubCategories = ({ allToys }) => {
    const birdsToy = allToys.filter(bird => bird.subCategory == "Birds Toys")
    const mammalToy = allToys.filter(mammal => mammal.subCategory == "Mammals Toys")
    const reptileToy = allToys.filter(reptile => reptile.subCategory == "Reptile Toys")
    console.log(reptileToy);
    return (
        <div>
            <Tabs className="lg:w-2/3 lg:mx-auto">
                <TabList className="text-white flex justify-between  px-2 py-2 bg-green-700 ">
                    <Tab className="tab-container" >Mammals Toys</Tab>
                    <Tab className="tab-container" >Birds Toys</Tab>
                    <Tab className="tab-container" >Reptile Toys </Tab>
                </TabList>
                <TabPanel className="w-full">
                    <div className='flex'>
                        {
                            mammalToy.map(m => <SubCategoryDetail>{m}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='flex gap-5'>
                        {
                            birdsToy.map(b => <SubCategoryDetail>{b}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                   <div className='flex'>
                   {
                        reptileToy.map(r => <SubCategoryDetail>{r}</SubCategoryDetail>)
                    }
                   </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategories;