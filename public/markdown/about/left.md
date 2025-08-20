```csharp
using Mih4n;

public class AboutViewer : IViewer<About>
{
    public About View()
    {
        return new About()
        {
            Nick = "Mih4n",
            Name = "Mikhail",
            Surname = "Loseu",
            Motto = "It compiles? Ship it!",
            FavoriteException = "NullReferenceException",
            CoffeeConsumption = int.MaxValue
        }
    }
}
```