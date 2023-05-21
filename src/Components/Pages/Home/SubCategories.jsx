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
            <Tabs className="mx:3 md:mx-12" data-aos="fade-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <TabList className="text-white flex justify-around px-2 py-2">
                    <Tab className="tab-container" >Mammals Toys</Tab>
                    <Tab className="tab-container" >Birds Toys</Tab>
                    <Tab className="tab-container" >Reptile Toys </Tab>
                </TabList>
                <TabPanel className="w-full">
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            mammalToy.map(m => <SubCategoryDetail>{m}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            birdsToy.map(b => <SubCategoryDetail>{b}</SubCategoryDetail>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='grid grid-cols-3 gap-3'>
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