import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryDetail from './SubCategoryDetail';

const SubCategories = ({allToys}) => {     
     const birdsToy = allToys.filter(bird => bird.subCategory == "Birds Toys")
     const mammalToy = allToys.filter(mammal => mammal.subCategory == "Mammals Toys")
     const reptileToy = allToys.filter(reptile => reptile.subCategory == "Reptile Toys")
     console.log(reptileToy);
    return (
        <div>
            <Tabs className="">
                <TabList className="flex bg-red-700">
                    <Tab>Mammals Toys</Tab>
                    <Tab className="font-bold text-xl p-3 rounded-2xl" >Birds Toys</Tab>
                    <Tab>Reptile Toys</Tab>
                </TabList>
                <TabPanel>
                    {
                        mammalToy.map(m => <SubCategoryDetail>{m}</SubCategoryDetail>)
                    }                  
                </TabPanel>
                <TabPanel>
                    {
                        birdsToy.map(b => <SubCategoryDetail>{b}</SubCategoryDetail>)
                    }
                </TabPanel>
                <TabPanel>
                   {
                    reptileToy.map(r => <SubCategoryDetail>{r}</SubCategoryDetail>)
                   }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategories;