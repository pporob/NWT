using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Bestreads.Startup))]
namespace Bestreads
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
