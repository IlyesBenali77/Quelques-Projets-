using Microsoft.AspNetCore.Mvc;

namespace MonPortfolio.Controllers
{
    public class SampleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
