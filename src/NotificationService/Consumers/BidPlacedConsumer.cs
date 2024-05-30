using MassTransit;
using Microsoft.AspNetCore.SignalR;

namespace NotificationService;

public class BidPlaced : IConsumer<BidPlaced>
{
    private readonly IHubContext<NotificationHub> _hubContext;

    public BidPlaced(IHubContext<NotificationHub> hubContext)
    {
        _hubContext = hubContext;
    }

    public async Task Consume(ConsumeContext<BidPlaced> context)
    {
        Console.WriteLine("--> bid placed message received");
        await _hubContext.Clients.All.SendAsync("BidPlaced", context.Message);
        
    }
}
