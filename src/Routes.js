import ShowBlogs from "./components/ShowBlogs"
import AddBlog from "./components/AddBlog"
import SingleBlog from "./components/SingleBlog"

export default [
    {
        path:"/",
        name:ShowBlogs,
        component:ShowBlogs
    },
    {
        path:"/add",
        name:AddBlog,
        component:AddBlog
    },
    {
        path:"/blog/:id",
        name:SingleBlog,
        component:SingleBlog
    }
]