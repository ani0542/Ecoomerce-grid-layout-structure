import React from 'react'
import FilterPanel from '../components/FilterPanel'
import List from '../components/List'
import SearchBar from '../components/SearchBar'

function Home() {
    return (
        <div className='home'>
                     {/* Search Bar */}
                        <SearchBar/>
                     <div className='home_panelList-wrap'>
                                   {/* Filter Panel */}
                                   <div className='home_panel-wrap'>
                                           <FilterPanel/>
                                   </div>
                                    {/* List & Empty View */}
                                   <div className='home_list-wrap'>
                                             
                                                <List/>
                                    </div>  
                                   
                     </div>
                    
                    
        </div>
    )
}

export default Home
